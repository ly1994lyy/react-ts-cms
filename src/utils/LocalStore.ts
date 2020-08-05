const store = window.localStorage;

class LocalStore {
    /*
    * 设置数据：如果value是对象的话，转换成字符串
    */
   public static set(key:string,value:any){
       if(!store) {
           return;
       }
       let v = value;
       try {
           if(typeof value === 'object'){
               v= JSON.stringify(v)
           }
           store.setItem(key,v)
       }catch(error){
           //错误处理
       }
   }

   /*
   * 直接获取
   */
   public static get(key:string){
        if(!store) {
            return;
        }

        return store.getItem(key)
   }

   public static get2json(key:string){
        if(!store) {
            return;
        }
        const data = store.getItem(key)
        if(data){
            try {
                return JSON.parse(data)
            } catch (error) {
                //do ..
            }
        }

        return null
   }

   public static remove(key:string){
        if(!store) {
            return;
        }
        try {
            store.removeItem(key)
        } catch (error) {
            //do ..
        }
   }
}
export default LocalStore;