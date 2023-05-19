#ENDPOINTS

| Method | Endpoint           |
| ------ | ------------------ |  
| POST   | /add-article       | 
| GET    | /article/{uid}     | 
| GET    | /article           |

<hr>

### <b>POST /add-article </b>
Menambahkan artikel ke database

Request body:
```json
{ 
  "imageURL": "https://www.ekahospital.com/uploads/dr-dr--m--yaminimages-2020-05-26-094801.jpg", 
  "title": "contoh title",
  "description": "contoh deskripsi singkat",
  "content": "contoh isi konten artikel xxxxx xxxxx xxxx" 
} 
```

response :
"status": "Success",
"message": "article berhasil ditambah"

<hr>

### <b>GET /article/{uid} </b>
Mendapatkan data artikel berdasarkan uid

Request parameter: uid: uid artikel

Response:
```json
{ 
  "status": "Success",
  "message": "Mendapatkan data seluruh artikel berhasil",
  "data": {
    "imageURL": "https://www.ekahospital.com/uploads/dr-dr--m--yaminimages-2020-05-26-094801.jpg", 
    "title": "contoh title",
    "description": "contoh deskripsi singkat",
    "content": "contoh isi konten artikel xxxxx xxxxx xxxx"
  }
} 
```
<b>response akan berisi dengan data artikel sesuai id yang diambil<b>

<hr>

### <b>GET /article <b>
Mendapatkan data seluruh artikel yang ada di database

Response:
```json
  "status": "Success",
  "message": "Mendapatkan data seluruh artikel berhasil",
  "data": {
            "id": "1",
            "title": "title1",
            "description": "description1",
            "content": "content1",
            "imageUrl": "imageUrl1"
        },
        {
            "id": "2",
            "title": "title2",
            "description": "description3",
            "content": "content2",
            "imageUrl": "imageUrl3"
        }
        ...........
```
