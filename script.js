function node() {


  return{value:null,nextNode:null}
}

class LinkedList{


append(Head,newNode){

  newNode.nextNode=null;
this.transverse(Head).nextNode=newNode;



}

transverse(Head){

  if(Head.nextNode===null){

    return Head
  }
console.log(Head)
  return this.transverse(Head.nextNode)


}

}

let LinkedListFunctionalities=new LinkedList();

let lastItem=node();
lastItem.value="lastItem";

let thirdItem=node();
thirdItem.value="thirdItem";
thirdItem.nextNode=lastItem;

let secondItem=node()
secondItem.value="secondItem";
secondItem.nextNode=thirdItem;

let Head=node();
Head.value="Head";
Head.nextNode=secondItem;


let extraItem=node()
extraItem.value="sade";

LinkedListFunctionalities.append(Head,extraItem)

console.log(LinkedListFunctionalities.transverse(Head))