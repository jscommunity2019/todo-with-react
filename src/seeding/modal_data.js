function modal_data(array,func){

    return [
        {
          label : 'Name',
          config : {
            nature : 'input',
            type : 'text',
            placeholder : 'Enter the name...',
            value : array.name,
            onChange : func,
            name : 'name' 
          }
        },
        {
          label : 'Email',
          config : {
            nature : 'input',
            type : 'email',
            placeholder : 'Enter the email...',
            value : array.email,
            onChange : func,
            name : 'email' 
          }
        },
        {
          label : 'Mobile',
          config : {
            nature : 'input',
            type : 'text',
            placeholder : 'Enter the mobile...',
            value : array.mobile,
            onChange : func,
            name : 'mobile' 
          }
        }
    ]
}

export default modal_data;