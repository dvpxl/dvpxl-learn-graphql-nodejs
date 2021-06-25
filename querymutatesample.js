mutation changeDocumentName($id:Int!, $name:String!) {
    changeDocumentName(id:$id, name:$name) {
      id
      name
    }
  }
  
  ##################
  # example mutate query
  # {
  #   "id": 1,
  #   "name": "helloblah.txt"
  # }
  ##################