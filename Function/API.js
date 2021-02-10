//import { socket, sc } from '../socket'

function handleErrors(response){
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

class API {
    
    constructor(token){
      this.url = process.env.REACT_APP_URL+'/';
      this.token = token
      this.JWTHeader = {headers:new Headers({'Authorization':'bearer '+this.token})}
      this.JWTHeaderPost = new Headers({'Authorization':'bearer '+this.token, 'Accept': 'application/json',  'Content-Type': 'application/json'})
    }

    setToken(token){
      this.token = token
      this.JWTHeader = {headers:new Headers({'Authorization':'bearer '+this.token})}
      this.JWTHeaderPost = new Headers({'Authorization':'bearer '+this.token, 'Accept': 'application/json',  'Content-Type': 'application/json'})
    }

    

    async Get(Data,Params){
      try {
          let data = await (await (fetch( this.url + Data + Params,this.JWTHeader)
          .then(handleErrors)
          .then(function(response) {
              return response.json()
          }).catch(function(error) {
              //sc.ErrorLogs('Get '+Data,error.message+' ('+Params+')')
              return error
          })
          ))
         return data;
        } catch (error) {
          return error
        }
  }

    async GetAll(Data){
        try {
            let data = await (await (fetch( this.url + Data ,this.JWTHeader)
            .then(handleErrors)
            .then(function(response) {
                return response.json()
            }).catch(function(error) {
                //sc.ErrorLogs('GetAll '+Data,error.message)
              return error
          })
            ))
            return data;
          } catch (error) {
            return error
          }
    }

    async GetOne(Data,Id){
        try {
            let data = await (await (fetch( this.url + Data + '/Get?id=' +Id,this.JWTHeader)
            .then(handleErrors)
          .then(function(response) {
              return response.json()
          }).catch(function(error) {
              //sc.ErrorLogs('GetOne '+ Data,error.message+' ('+Id+')')
              return error
          })
          ))
         return data;
          } catch (error) {
            return error
          }
    }

    async GetMenuByName(Name){
        try {
            let data = await (await (fetch( this.url + 'Menu/GetMenuByName?name=' +Name,this.JWTHeader)
            .then(handleErrors)
          .then(function(response) {
              return response.json()
          }).catch(function(error) {
              //sc.ErrorLogs('GetOne '+ Data,error.message+' ('+Id+')')
              return error
          })
          ))
         return data;
          } catch (error) {
            return error
          }
    }

    async GetLimit(Data,Limit,Offset){
        try {
            let data = await (await (fetch( this.url + Data + '/GetLimit?lm='+Limit + (Offset ? ('os=' +Offset) : ''),this.JWTHeader)
            .then(handleErrors)
          .then(function(response) {
              return response.json()
          }).catch(function(error) {
              //sc.ErrorLogs('GetLimit '+ Data,error.message+' ('+Limit+','+Offset+')')
              return error
          })
          ))
         return data;
          } catch (error) {
            return error
          }
    }

    async Add(Data,Body,Header=this.JWTHeaderPost){
        try {
            let data = await (await (fetch( this.url + Data + '/Add' ,{headers:Header,method:'post',body: Body})
            .then(handleErrors)
          .then(function(response) {
              return response.json()
          }).catch(function(error) {
              //sc.ErrorLogs('Add '+ Data,error.message +' ('+Body+')')
              return error
          })
          ))
         return data;
          } catch (error) {
            return error
          }
    }

    async Edit(Data,Body,Header=this.JWTHeaderPost){
        try {
            let data = await (await (fetch( this.url + Data + '/Edit' ,{headers:Header,method:'post',body: Body})
            .then(handleErrors)
          .then(function(response) {
              return response.json()
          }).catch(function(error) {
              //sc.ErrorLogs('Edit '+ Data,error.message +' ('+Body+')')
              return error
          })
          ))
         return data;
          } catch (error) {
            return error
          }
    }

    async Remove(Data,Id){
        try {
            let data = await (await (fetch( this.url + Data + '/Remove?id=' + Id,this.JWTHeader)
            .then(handleErrors)
          .then(function(response) {
              return response.json()
          }).catch(function(error) {
              //sc.ErrorLogs('Remove '+ Data,error.message +' ('+Id+')')
              return error
          })
          ))
         return data;
          } catch (error) {
            return error
          }
    }

    async UploadImage(base64,filename){
        try {       
            let data = 'Don\'t Return' 
            await fetch(base64)
            .then(async response => response.blob())
            .then(async blob => {
      
                const formdata = new FormData();
                const file = new File([blob], filename)
      
                formdata.append('image',file)
      
                data = await (await (fetch(this.url+'upload',{method:'post',body: formdata})
                .then( response => { return response.json().text() })
                .catch(err => {
                  //sc.ErrorLogs('UploadImage ',err.message)
                   //console.log('Error : '+err) 
                  })))
      
            })
            return data
          } catch (error) {
            return error
          }
    }

    async CheckAuth(){
        try {
          let data = await (await (fetch( this.url + 'User/CheckAuth',this.JWTHeader)
          .then(handleErrors)
            .then(function(response) {
                return response.json()
            }).catch(function(error) {
                sc.ErrorLogs('CheckAuth '+ Data,error.message)
                return error
            })
            ))
           return data;
        } catch (error) {
          return error
        }
      }

    async Authentication(Username, Password, Level){
        try {
          let data = await (await (fetch( this.url + 'User/SignIn', {headers:this.JWTHeaderPost,method:'post',body: JSON.stringify({ username:Username,password:Password,level:Level })} )
          .then(handleErrors)
            .then(function(response) {
                return response.json()
            }).catch(function(error) {
                sc.ErrorLogs('Authentication '+ Data,error.message +' ('+Username+','+Level+')')
                return error
            })
            ))
           return data;
        } catch (error) {
          return error
        }
      }

    async MoveLeft(MenuId){
      try {
          let data = await (await (fetch( this.url + 'Menu/Left' ,{headers:{ 'Content-Type': 'application/json' },method:'post',body: JSON.stringify({id:MenuId})})
          .then(handleErrors)
          .then(function(response) {
              return response.json()
          }).catch(function(error) {
            sc.ErrorLogs('MoveLeft '+ MenuId,error.message)
              return error
          })
          ))
         return data;
        } catch (error) {
          return error
        }
    }

    async MoveRight(MenuId){
      try {
          let data = await (await (fetch( this.url + 'Menu/Right' ,{headers:{ 'Content-Type': 'application/json' },method:'post',body: JSON.stringify({id:MenuId})})
          .then(handleErrors)
          .then(function(response) {
              return response.json()
          }).catch(function(error) {
              sc.ErrorLogs('MoveRight '+ MenuId,error.message)
              return error
          })
          ))
         return data;
        } catch (error) {
          return error
        }
    }
}

export default API