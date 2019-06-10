import React, { Component } from 'react';
import './MainComponent.css';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import data from '../../seeding/data.js';
import modal_data from '../../seeding/modal_data.js';

class MainComponent extends Component {

  state = {
    data : data,
    searchInput : '',
    filterBy : 'Name',
    showModal : false,
    new_user:{
      name : '',
      email : '',
      mobile : ''
    },
    id:null
  };

  changeHandler = (event) => {

    let data_api = data;

    if(event.target.name === 'select_change'){
      this.setState({
        ...this.state,
        filterBy : event.target.value,
        searchInput : '',
        data : data_api,
        id:null
      });

      return;
    }
    

    let filter_data = []

    switch(this.state.filterBy.toLowerCase()){

      case 'name' : filter_data = data_api.filter((element) => element.name.toLowerCase().indexOf(event.target.value) !== -1 );
        break;
      case 'email' : filter_data = data_api.filter((element) => element.email.toLowerCase().indexOf(event.target.value) !== -1 );
        break;
      case 'mobile' : filter_data = data_api.filter((element) => element.mobile.toLowerCase().indexOf(event.target.value) !== -1 );
        break;
      default : filter_data = []
    }

    this.setState({
      ...this.state,
      data : filter_data,
      searchInput : event.target.value
    });
  };

  toggleModal = (event) => {
    this.setState({
      ...this.state,
      showModal : !this.state.showModal
    });
  };

  submit_click = (event) => {
    if(this.state.id === null){
      
      // console.log();
      const new_data = [...this.state.data];
      new_data.push({...{id : data.length + 1},...this.state.new_user});
      this.setState({
        data : new_data,
        showModal:false
      });
    }
    else{
      const obj = [...this.state.data];
      const par_obj = obj.filter((ele) => ele.id === this.state.id)[0];
      par_obj.name = this.state.new_user.name;
      par_obj.email = this.state.new_user.email;
      par_obj.mobile = this.state.new_user.mobile;

      this.setState({
        ...this.state,
        data : obj,
        showModal : false,
        id:null
      });

    }
  };


  editHandler = (event,id) => {
    let user = {...this.state.data.filter((ele) => ele.id === id)[0]};
    delete user.id;
    this.setState({
      ...this.state,
      new_user: user,
      showModal : true,
      id:id
    });
  };

  deleteHandler = (event,id) => {
    let data = this.state.data;
    data = data.filter((ele) => ele.id !== id);
    this.setState({
      ...this.state,
      data : data
    });
  };

  modal_input_change = (event) => {
    let updated_new_user = {...this.state.new_user};
    let input_name = event.target.name;

    switch(input_name){
      case 'name' : updated_new_user.name = event.target.value;
        break;
      case 'email' : updated_new_user.email = event.target.value;
        break;
      case 'mobile' : updated_new_user.mobile = event.target.value;
       break;
       default : updated_new_user = null
    }

    this.setState({
      ...this.state,
      new_user : updated_new_user
    });
  };

  render(){

    const table_head_placeholder = ["S.no","Name","Email","Mobile"];
    const serach_option = ["Name","Email","Mobile"];

    let modal_body_array = modal_data(this.state.new_user,this.modal_input_change) ;
    

    const modal = this.state.showModal && (
      <Modal close_click={this.toggleModal} submit_click={this.submit_click} heading="Add New User">
        {modal_body_array.map((element,index) => {
          return (
            <div key={index}>
              <label>{element.label}</label>
              <CustomInput {...element.config} />
            </div>
          )
        })}
      </Modal>
    );

    return (
        <div className="container Main">
          {modal}
          <div className="row">
            <div className="col-md-2">
              <Button name="Add New" click={this.toggleModal}/>
            </div>
            <div className="col-md-4">
              <CustomInput nature="input" value={this.state.searchInput} onChange={this.changeHandler} type="text" name="search" placeholder="Serach Here..." />
            </div>
            <div className="col-md-2">
              <CustomInput nature="select" value={this.state.filterBy} option={serach_option} onChange={this.changeHandler} type="text" name="select_change" placeholder="Serach Here..." />
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-8">
              <Table table_head_placeholder={table_head_placeholder} edit={this.editHandler} delete={this.deleteHandler} cell_data={this.state.data}/>
            </div>
          </div>
        </div>

      );
  }
}
 
export default MainComponent;