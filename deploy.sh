#!/bin/bash

# Deploy script for EC2
echo "🚀 Starting deployment to EC2..."

# Update system
sudo apt update
sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Install build tools for better-sqlite3
sudo apt-get install -y build-essential python3

# Clone or update repository
if [ -d "englishtoday" ]; then
    cd englishtoday
    git pull
else
    git clone <YOUR_REPO_URL> englishtoday
    cd englishtoday
fi

# Install backend dependencies
cd backend
npm install

# Seed database with sample data
npm run seed

# Build frontend
cd ../
npm install
npm run build

# Setup PM2 ecosystem
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [
    {
      name: 'englishtoday-backend',
      script: './backend/server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
};
EOF

# Start backend with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Install and configure Nginx
sudo apt install -y nginx

# Create Nginx configuration
sudo tee /etc/nginx/sites-available/englishtoday << EOF
server {
    listen 80;
    server_name _;

    # Serve frontend
    location / {
        root /home/ubuntu/englishtoday/dist;
        try_files \$uri \$uri/ /index.html;
    }

    # Proxy API requests to backend
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable site and restart Nginx
sudo ln -sf /etc/nginx/sites-available/englishtoday /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

echo "✅ Deployment completed!"
echo "🌐 Your app should be available at http://YOUR_EC2_IP"
echo "📊 Check backend status: pm2 status"
echo "📝 Check backend logs: pm2 logs englishtoday-backend"