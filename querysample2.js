query getDocumentsByType($type:String!) {
    documents(type:$type) {
      id
      name
      type
      tags
      description
      url
    }
  }
  
  # example query

  query example
  {
    "type": "image"
  }
  
  # output  
  # {
  #   "data": {
  #     "documents": [
  #       {
  #         "id": 3,
  #         "name": "photo1.png",
  #         "type": "image",
  #         "tags": "#notes, #w2",
  #         "description": "None",
  #         "url": "http://localhost/"
  #       },
  #       {
  #         "id": 4,
  #         "name": "photo2.png",
  #         "type": "image",
  #         "tags": "#trip #hawaii",
  #         "description": "None",
  #         "url": "http://localhost/"
  #       },
  #       {
  #         "id": 5,
  #         "name": "photo3.png",
  #         "type": "image",
  #         "tags": "#trip #korea",
  #         "description": "None",
  #         "url": "http://localhost/"
  #       }
  #     ]
  #   }
  # }
  
  