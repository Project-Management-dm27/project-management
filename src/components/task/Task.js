import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import { connect } from 'react-redux';
import './task.css'

const dateStyle = {
    color: 'white'
}

class Task extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    //#region SinglyList

    // SinglyList( value ) {

    //     function Node(data) {
    //         this.data = data;
    //         this.next = null;
    //     }
         
    //     function SinglyList() {
    //         this._length = 0;
    //         this.head = null;
    //     }
         
    //     SinglyList.prototype.add = function(value) {
    //         var node = new Node(value),
    //             currentNode = this.head;
         
    //         // 1st use-case: an empty list
    //         if (!currentNode) {
    //             this.head = node;
    //             this._length++;
         
    //             return node;
    //         }
         
    //         // 2nd use-case: a non-empty list
    //         while (currentNode.next) {
    //             currentNode = currentNode.next;
    //         }
         
    //         currentNode.next = node;
         
    //         this._length++;
             
    //         return node;
    //     };
         
    //     SinglyList.prototype.searchNodeAt = function(position) {
    //         var currentNode = this.head,
    //             length = this._length,
    //             count = 1,
    //             message = {failure: 'Failure: non-existent node in this list.'};
         
    //         // 1st use-case: an invalid position
    //         if (length === 0 || position < 1 || position > length) {
    //             throw new Error(message.failure);
    //         }
         
    //         // 2nd use-case: a valid position
    //         while (count < position) {
    //             currentNode = currentNode.next;
    //             count++;
    //         }
         
    //         return currentNode;
    //     };
         
    //     SinglyList.prototype.remove = function(position) {
    //         var currentNode = this.head,
    //             length = this._length,
    //             count = 0,
    //             message = {failure: 'Failure: non-existent node in this list.'},
    //             beforeNodeToDelete = null,
    //             nodeToDelete = null,
    //             deletedNode = null;
         
    //         // 1st use-case: an invalid position
    //         if (position < 0 || position > length) {
    //             throw new Error(message.failure);
    //         }
         
    //         // 2nd use-case: the first node is removed
    //         if (position === 1) {
    //             this.head = currentNode.next;
    //             deletedNode = currentNode;
    //             currentNode = null;
    //             this._length--;
                 
    //             return deletedNode;
    //         }
         
    //         // 3rd use-case: any other node is removed
    //         while (count < position) {
    //             beforeNodeToDelete = currentNode;
    //             nodeToDelete = currentNode.next;
    //             count++;
    //         }
         
    //         beforeNodeToDelete.next = nodeToDelete.next;
    //         deletedNode = nodeToDelete;
    //         nodeToDelete = null;
    //         this._length--;
         
    //         return deletedNode;
    //     };

    // }

    //#endregion SinglyList

    handleInput() {

    }

    render() {
        return(
            <div className='task-body'>
                <div className='task-box'>
                    <section className='task-create-location'>

                    </section>
                    <section className='task-create-inputs'>
                        <input name='name' placeholder='Project Name' />
                        <DatePicker hintText="Start Date" hintStyle={{color: 'white', textAlign: 'right'}} inputStyle={{color: 'white', fontFamily: 'helvetica', fontSize: '12px'}} underlineShow={false} className='task-date' />
                        <DatePicker hintText="End Date" />
                        <input placeholder='Description' />
                        <input placeholder='Users' />
                        <input placeholder='Roles' />
                        <input placeholder='Cloud Link' /> 
                    </section>
                    
                </div>

                <div className='task-box'>
                    <section className='task-create-location'>

                    </section>
                    <section className='task-create-inputs'>
                        <input name='name' placeholder='Project Name' />
                        <DatePicker hintText="Start Date" hintStyle={{color: 'white', textAlign: 'right'}} inputStyle={{color: 'white', fontFamily: 'helvetica', fontSize: '12px'}} underlineShow={false} className='task-date' />
                        <DatePicker hintText="End Date" />
                        <input placeholder='Description' />
                        <input placeholder='Users' />
                        <input placeholder='Roles' />
                        <input placeholder='Cloud Link' /> 
                    </section>
                    
                </div>

                <div className='task-box'>
                    <section className='task-create-location'>

                    </section>
                    <section className='task-create-inputs'>
                        <input name='name' placeholder='Project Name' />
                        <DatePicker hintText="Start Date" hintStyle={{color: 'white', textAlign: 'right'}} inputStyle={{color: 'white', fontFamily: 'helvetica', fontSize: '12px'}} underlineShow={false} className='task-date' />
                        <DatePicker hintText="End Date" />
                        <input placeholder='Description' />
                        <input placeholder='Users' />
                        <input placeholder='Roles' />
                        <input placeholder='Cloud Link' /> 
                    </section>
                    
                </div>
                <div className='task-box'>
                    <section className='task-create-location'>

                    </section>
                    <section className='task-create-inputs'>
                        <input name='name' placeholder='Project Name' />
                        <DatePicker hintText="Start Date" hintStyle={{color: 'white', textAlign: 'right'}} inputStyle={{color: 'white', fontFamily: 'helvetica', fontSize: '12px'}} underlineShow={false} className='task-date' />
                        <DatePicker hintText="End Date" />
                        <input placeholder='Description' />
                        <input placeholder='Users' />
                        <input placeholder='Roles' />
                        <input placeholder='Cloud Link' /> 
                    </section>
                    
                </div>

                <div className='task-box'>
                    <section className='task-create-location'>

                    </section>
                    <section className='task-create-inputs'>
                        <input name='name' placeholder='Project Name' />
                        <DatePicker hintText="Start Date" hintStyle={{color: 'white', textAlign: 'right'}} inputStyle={{color: 'white', fontFamily: 'helvetica', fontSize: '12px'}} underlineShow={false} className='task-date' />
                        <DatePicker hintText="End Date" />
                        <input placeholder='Description' />
                        <input placeholder='Users' />
                        <input placeholder='Roles' />
                        <input placeholder='Cloud Link' /> 
                    </section>
                    
                </div>

                <div className='task-box'>
                    <section className='task-create-location'>

                    </section>
                    <section className='task-create-inputs'>
                        <input name='name' placeholder='Project Name' />
                        <DatePicker hintText="Start Date" hintStyle={{color: 'white', textAlign: 'right'}} inputStyle={{color: 'white', fontFamily: 'helvetica', fontSize: '12px'}} underlineShow={false} className='task-date' />
                        <DatePicker hintText="End Date" />
                        <input placeholder='Description' />
                        <input placeholder='Users' />
                        <input placeholder='Roles' />
                        <input placeholder='Cloud Link' /> 
                    </section>
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { placeholder } = state;

    return {
        placeholder
    };
}

export default connect( mapStateToProps )(Task);