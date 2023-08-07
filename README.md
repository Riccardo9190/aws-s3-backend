# AWS S3 Back-End

Server-side application for interacting with AWS S3 bucket.

### Technologies Used:

- Node.js
- Express

### To Run Locally

To run locally, you must have a configured bucket on [AWS](https://aws.amazon.com) S3 service. Once you get it, you can continue the installation procedure.

- Clone this repository with ```git clone https://github.com/Riccardo9190/aws-s3-backend.git```

- Access the app folder with ```cd aws-s3-backend```

- Install all dependencies with ```npm install```

- Set the following environment variables based on your S3 bucket configuration:

```shell
echo "AWS_BUCKET_NAME=<your_bucket_name_here>" > .env
```

```shell
echo "AWS_BUCKET_REGION=<your_bucket_region_here>" > .env
```

```shell
echo "AWS_BUCKET_ACCESS_KEY=<your_access_key_here>" > .env
```

```shell
echo "AWS_BUCKET_SECRET_KEY=<your_secret_key_here>" > .env
```

- Run the API with  ```npm run dev```

