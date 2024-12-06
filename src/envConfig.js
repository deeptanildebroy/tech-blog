const envConfig = {
    apiEndpoint: String(import.meta.env.VITE_APPWRITE_API_URL),
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    bucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    userCollectionId: String(import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID),
    postCollectionId: String(import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID),
}

export default envConfig