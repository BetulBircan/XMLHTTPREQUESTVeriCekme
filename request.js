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
