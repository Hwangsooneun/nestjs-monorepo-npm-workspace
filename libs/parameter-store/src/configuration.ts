import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';

export default async () => {
  const envConfig = {};
  const region = 'ap-northeast-2';
  const secretName =
    process.env.NODE_ENV === 'production'
      ? 'ob-kr-back-env'
      : 'ob-back-dev-env';

  const config: {
    region: string;
    credentials?: { accessKeyId: string; secretAccessKey: string };
  } = {
    region,
  };
  if (process.env.NODE_ENV === 'local') {
    config.credentials = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    };
  }

  const secretManager = new SecretsManagerClient(config);

  const command = new GetSecretValueCommand({
    SecretId: secretName,
  });

  const secretResult = await secretManager.send(command);

  const localKey = [
    'FRONT_URL',
    'APPLE_CALLBACK_URL',
    'GOOGLE_CALLBACK_URL',
    'NAVER_CALLBACK_URL',
    'KAKAO_CALLBACK_URL',
    'APPLE_CALLBACK_URL_V2',
    'GOOGLE_CALLBACK_URL_V2',
    'NAVER_CALLBACK_URL_V2',
    'KAKAO_CALLBACK_URL_V2',
    'OAUTH_EXCEPTION_URL_V2',
    'OAUTH_EXCEPTION_URL',
    'OAUTH_JOIN_URL',
    'MYSQL_HOST',
    'MYSQL_DATABASE',
  ];
  const resultSecrets = JSON.parse(secretResult.SecretString);

  for (const key in resultSecrets) {
    if (process.env.NODE_ENV === 'local' && localKey.includes(key)) {
      envConfig[key] = process.env[key];
    } else {
      envConfig[key] = resultSecrets[key];
    }
  }
  return envConfig;
};
