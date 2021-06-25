# here we define fragments so we do not need to repeat 
# typing in fields
query exampleQueryFragments($id1: Int!, $id2: Int!) {
  file1:document(id:$id1) {
    ...allDocFields
  }
  file2:document(id:$id2){
    ...minDocFields
  }
}

# the desired fields for type Document
fragment allDocFields on Document {
  id
  name
  type
  tags
  url
}

# the desired fields for type Document
fragment minDocFields on Document {
  name
  url
}

# example query
# {
#   "id1": 1,
#   "id2": 2
# }

