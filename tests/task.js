import {test, expect} from '@playwright/test';
import { response } from 'express';
import res from 'express/lib/response';

test("test task", async ({request}) => {
    const baseURL='https://reqres.in';
    

   const UserCreatResponse= await request.post(baseURL+'/api/users',{
    data: {
        name: "Ahmed",
        job: "Test Engineer"
    }
   })
   expect(response.status()).toBe(201);
   const responseBody = await userCreateResponse.json();
   const userId = responseBody.id;
   console.log('Created User ID:', userId);

   
   const UserUpdate= await request.put(baseURL+'/api/users/'+userId,{
    data: {
        name: "Ahmed",
        job: "Senior Test Engineer"
    }
   })

   const GetUser= await request.get(baseURL+'/api/users/'+userId);
   expect(getUserResponse.status()).toBe(200);
   const GetUserJob = await getUserResponse.json();
   expect(GetUserJob.job).toBe("Senior Test Engineer");



   const DeleteUser= await request.delete(baseURL+'/api/users/'+userId);
   expect(deleteUserResponse.status()).toBe(204);


   const GetDeletedUser= await request.get(baseURL+'/api/users/'+userId);
   expect(getDeletedUserResponse.status()).toBe(404);



});