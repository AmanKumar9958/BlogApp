import config from '../config.js';
import {Client, Account, ID, Databases, Storage, Query} from 'appwrite';

export class DatabaseService{   // class DatabaseService
    client = new Client();
    databases;  // databases
    storage;    // storage bucket
    query;      // query


    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);    // creating new Databases object
        this.bucket = new Storage(this.client);   // creating new Storage object
        this.query = new Query(this.client);    // creating new Query object
    }

    // create post method
    async createPost({title, slug, content, image, status, userID}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    userID,
                    image,
                }
            )
        } catch (error) {
            throw error;
        }
    }

    // update post method
    async updatePost(slug, {title, content, image, status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    image,
                }
            )
        } catch (error) {
            throw error;
        }
    }

    // delete post method
    async deletePost({slug}){
        try {
            return await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            throw error;
        }
    }

    // get post method
    async getPost({slug}){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            throw error;
        }
    }

    // get all posts method (only active posts)
    async getAllPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            throw error;
        }
    }

    // file upload method
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
            );
        } catch (error) {
            throw error;
        }
    }

    // file delete method
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile()(
                config.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            throw error;
        }
    }

    // file preview method
    async previewFile(fileId){
        try {
            return await this.bucket.getFileView()(
                config.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            throw error;
        }
    }


};


const dbService = new DatabaseService();    // instance/object of DatabaseService

export default dbService;    // exporting dbService object
