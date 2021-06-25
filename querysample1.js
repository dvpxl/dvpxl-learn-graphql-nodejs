query getDocumentById($docId: Int!) {
  document(id:$docId) {
    name
  }
}

##### 
# query example 1
# {
#   "docId": 1
# }
