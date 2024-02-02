function node() {


  return{value:null,nextNode:null}
}

class LinkedList{


   find(headNode,wantedNode) {
 

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


