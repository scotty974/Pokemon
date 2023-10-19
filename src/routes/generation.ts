export async function pokemon(apiUrl:string):Promise<any>{
    try{
       const resp =  await fetch(apiUrl)
        const data = await resp.json()
        return data
    }catch(error){
        console.log(error)
        return error
    }
}