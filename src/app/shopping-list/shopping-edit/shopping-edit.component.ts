import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy{
// @ViewChild('nameInput')  nameInputRef:ElementRef;
// @ViewChild('amountInput')  amountInputRef:ElementRef;
// ingredientAdded=new EventEmitter<{name:string,amount:number}>();
// @Output() ingredientAdded=new EventEmitter<Ingredient>();
@ViewChild('f') slForm:NgForm;
subcription:Subscription;
editMode=false;
editedItemIndex:number;
editedItem:Ingredient;

constructor(private slService:ShoppingListService){}
ngOnInit(): void {
 this.subcription=this.slService.startedEditing.subscribe((index:number)=>{
  this.editedItemIndex=index;
  this.editMode=true;
  this.editedItem=this.slService.getIngredient(index);
  this.slForm.setValue({
    name:this.editedItem.name,
    amount:this.editedItem.amount
  })
 })
}
ngOnDestroy(): void {
  this.subcription.unsubscribe();
}

onSubmit(form:NgForm){
  const value=form.value;
  const newIngredient =new Ingredient(value.name,value.amount);
  if(this.editMode){
    this.slService.updateIngredient(this.editedItemIndex, newIngredient);
  }else{
    this.slService.addIngredient(newIngredient);
  }
  this.editMode=false;
  form.reset();
  // const ingName =this.nameInputRef.nativeElement.value;
  // const ingAmount =this.amountInputRef.nativeElement.value;
  // const newIngredient =new Ingredient(this.nameInputRef.nativeElement.value);
  
  // this.ingredientAdded.emit(newIngredient); 
}
onClear(){
    this.slForm.reset();
    this.editMode =false;
}
onDelete(){
  this.slService.deleteIngredient(this.editedItemIndex);
  this.onClear();
}


}
