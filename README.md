# Proje: XMLHttpRequest ile jsonplaceholder kullanılarak içerisindeki user bilgilerini yazdırma

Bu projeyi XMLHttpRequest ile " https://jsonplaceholder.typicode.com/users " üzerinden kullanıcın bilgilerini butona tıkladığımızda tabloya yazdırmak için oluşturdum. Tabloya yazdırmamın sebebi kullanıcının bilgilerinin daha derli toplu bir şekilde göstermek.

Bunun için ilk başta index.html sayfası oluşturdum ve button oluşturmak için `<input type="button" id="getUsers"value="Get All Users">` kodunu, tabloyu oluşturmak için de 

```
<table>
        <!-- başlık oluşturmak için thead etiketinden yararlanıldı-->
        <thead>
                <tr>  satır oluşturam
                <th>User Id</th> başlık oluşturma 
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Adress</th>
                <th>Phone</th>
                <th>WebSite</th>
                <th>Company</th>
            </tr> 
        </thead>
        <tbody id="table">   <!-- kullanıcın bilgilerinin yazdırılması için yani satır sütun şeklinde, tbody etiketinden yararlanıldı.
            
        </tbody>
    </table>
```
kodlarını kullandım. Daha sonra da style.css dosyası oluşturarak tablonun sınır çizgilerini oluşturmak için sayfaya ve tablolara bazı stiller oluşturdum.

```
table {
    /* buttonla table arasında boşluk oluşturma */
    margin: 10px;
    /* tablonun sınır çizgisini oluşturmak için kullanılan stil kodları */
    border: 5px solid #ddd;
}
/* tablonun başlıkları:userid,username..... */
th {
    /* tablonun sınır çizgisini oluşturmak için kullanılan stil kodları */
    border: 1px solid #ddd;
}
/* tablonun sütunları için */
td {
    /* tablonun sınır çizgisini oluşturmak için kullanılan stil kodları */
    border: 1px solid #ddd;
}
/* sayfanın body kısmına oluşturulan stil kodları */
body{
    text-align: center;
    background-color:blanchedalmond;
}
/* bu da buton,p gibi html etiketlerini ortalamak için oluşturulan stil kodları */
.ortala2 {
  /*sağdan ve soldan otomatik olarak ortlama soldan olarak  */
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  text-align: left;
}
```
En sonunda da butona tıkladığımzda xmlhttprequest isteği ile bize verileri getirmesi için gerekli kodları request.js dosyası oluşturdum ve gerekli kodları oraya yazıp projemi tamamladım.

```
// buttona tıkladığımızda verinin gelmesi için oluşturulan js kodu 
document.querySelector("#getUsers").addEventListener('click',getUsers)

function getUsers() {
    
    // xmlhttprequest kullanılarak veri çekmesi için yeni xmlhttprequest nesnesi oluşturuldu.
    const xhr = new XMLHttpRequest()
    
    //"https://jsonplaceholder.typicode.com/users" apisinden get metodu ile veriyi alması için open özelliğ kulllanıldı
    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true)
    
    // sayfada herhangi bir değişiklik olduğunda yani sunucudan bilgi istendiğinde tetiklenmesi için onreadystatechange özelliği kullanıldı
    xhr.onreadystatechange = function () {
        // burda da json.parse ile kullanıcının bilgilerinin object türüne dönüştürüldü.Çünkü bilgileri tabloya düzgünce yazdırabilmek için
        let info = JSON.parse(this.responseText)
        let html = "";
        
        // sunucu hazır olduğunda yani işlem başarılı  olduğunda 
        if(this.readyState == 4 && this.status == 200)
        {
            
            // burda da 10 tane kullanıcın bilgilerine ulaşıp tabloya yazdırmak için foreach döngüsünden yararlanıldı.
            info.forEach(element => {
                
                // html değişkenine html kodlarını yazdırmak ve sütuna kullanıcını id,username gibi bilgileri göstermek için yazılan js kodları da bunlardır.
                html += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.username}</td>
                    <td>${element.email}</td>
                    <td>${element.address.street},${element.address.suite},${element.address.city},${element.address.geo.lat},${element.address.geo.lng}</td>
                    <td>${element.phone}</td>
                    <td>${element.website}</td>
                    <td>${element.company.name},${element.company.catchPhrase},${element.company.bs}</td>
                </td>
            </tr>

                `
            });
        }
            // burda da tabloya yazdırma işlemi yapıldı.
            document.querySelector("#table").innerHTML = html
        
    // son olarak da sunucunun bilgileri bize göndermesi için send özelliği kullanıldı.
    xhr.send()

    }
}

```
**Projenin Son Çıktısı**

![butonatıklamadanonce](https://user-images.githubusercontent.com/86554799/152661761-3c51279b-8533-4657-a2f4-3d1b8f0fd696.jpg)

![butonatıkladıktansonra](https://user-images.githubusercontent.com/86554799/152661776-c12d68b3-0c61-489c-902c-df56696d28df.jpg)

