# Environment Variables Setup

## Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# AWS Configuration (Required for Lambda)
AWS_REGION=us-east-1
DAILY_SENTENCES_TABLE=DailySentences

# GenAI Configuration (Required for generateDailySentences)
GENAI_API_KEY=your_api_key_here
GENAI_API_URL=https://api.openai.com/v1/chat/completions
GENAI_MODEL=gpt-4o-mini
GENAI_PROMPT=

# Environment
NODE_ENV=development
```

## Variable Descriptions

### AWS Configuration
- **AWS_REGION**: AWS region for Lambda and DynamoDB (default: `us-east-1`)
  - Used by DynamoDB client in `backend/libs/dynamodb.js`
  - Examples: `us-east-1`, `us-west-2`, `eu-west-1`

- **DAILY_SENTENCES_TABLE**: DynamoDB table name for storing sentences (default: `DailySentences`)
  - Used by repository in `backend/libs/dailySentencesRepository.js`
  - Must match the table name created in AWS

### GenAI Configuration
- **GENAI_API_KEY**: API key for GenAI service (OpenAI, Anthropic, etc.)
  - Required for `generateDailySentences` lambda
  - Keep this secret and never commit to version control
  - Get from: https://platform.openai.com/api-keys

- **GENAI_API_URL**: GenAI API endpoint (default: `https://api.openai.com/v1/chat/completions`)
  - OpenAI: `https://api.openai.com/v1/chat/completions`
  - Azure OpenAI: `https://YOUR_RESOURCE.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT/chat/completions?api-version=2024-02-15-preview`
  - Anthropic: `https://api.anthropic.com/v1/messages`

- **GENAI_MODEL**: Model to use for sentence generation (default: `gpt-4o-mini`)
  - OpenAI options: `gpt-4o-mini`, `gpt-4o`, `gpt-4-turbo`
  - Recommended: `gpt-4o-mini` (fast and cheap)
  - Cost comparison: https://openai.com/api/pricing/

- **GENAI_PROMPT**: Custom prompt for sentence generation (optional)
  - Leave empty to use default prompt
  - Default generates 20 sentences with mixed difficulty
  - Custom example: "Generate 20 business English sentences"

### Environment
- **NODE_ENV**: Environment mode (`development` or `production`)
  - Affects logging and error handling

## Setup Instructions

### Local Development

1. **Copy template to `.env` file:**
```bash
cp ENV_SETUP.md .env
# Edit .env with your values
```

2. **Set AWS credentials:**
```bash
aws configure
# Or set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
```

3. **Update values:**
- Replace `your_api_key_here` with your actual GenAI API key
- Adjust region if not using `us-east-1`
- Set table name if different from `DailySentences`

4. **Never commit `.env`:**
- Already in `.gitignore`
- Use AWS Secrets Manager or Parameter Store for production

### AWS Lambda Deployment

Environment variables are set via:
1. **Terraform/CDK** - In infrastructure code
2. **AWS Console** - Lambda Configuration > Environment variables
3. **AWS CLI:**
```bash
aws lambda update-function-configuration \
  --function-name getDailySentences \
  --environment Variables="{AWS_REGION=us-east-1,DAILY_SENTENCES_TABLE=DailySentences}"
```

### Lambda-Specific Notes

- Lambda automatically has AWS credentials
- No need to set `AWS_ACCESS_KEY_ID` in Lambda
- Use IAM roles for Lambda permissions
- Set `AWS_REGION` even though Lambda knows its region (for SDK)

## Security Best Practices

1. ✅ Never commit `.env` to git
2. ✅ Use AWS Secrets Manager for sensitive data in production
3. ✅ Rotate API keys regularly
4. ✅ Use IAM roles instead of access keys when possible
5. ✅ Set minimum required permissions (least privilege)

## Verification

Test if environment variables are loaded:

```bash
# Local
node -e "console.log(process.env.AWS_REGION)"

# Lambda (via CloudWatch Logs)
# Check logs after invocation
```
