query exampleQueryFragments($id1: Int!, $id2: Int!) {
    file1:document(id:$id1) {
      id
      name
      type
      url
    }
    file2:document(id:$id2){
      id
      name
      type
      url
    }
  }
  
  # example query
  {
    "id1": 1,
    "id2": 2
  }
  
  # output
  
  {
    "data": {
      "file1": {
        "id": 1,
        "name": "file1.txt",
        "type": "text",
        "url": "http://localhost/"
      },
      "file2": {
        "id": 2,
        "name": "file2.txt",
        "type": "text",
        "url": "http://localhost/"
      }
    }
  }