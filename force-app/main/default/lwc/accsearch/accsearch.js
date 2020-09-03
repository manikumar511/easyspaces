import { LightningElement,track } from 'lwc';

export default class Accsearch extends LightningElement {
    @track name1
    name='manikumar gunda';
    changename(event){
        console.log('event.target.value======='+event.target.value);
        name1=event.target.value;
    }
}