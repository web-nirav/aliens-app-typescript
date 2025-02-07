# Example markup
**Note: # Example markup**


// either we extends or we can overload the interface, both are same thing to combine 2 interfaces
interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder?: string; // we can put ? for optional property
}

interface ISearchBoxProps {
  onChangeHandler: () => void
}

interface IChangeHandlerProps {
  onChangeHandler: () => void
}

// interface can be extensible or overloaded, but type can't
// we can have different names and extends one into another
// or keep the same name of interface to overload it


// just for learning purpose
// in types we can do unions, means combining 2 types 

type USAddress = {
  street: string
  zip: number
}

type IndianAddress = {
  street: string
  pincode: number
}

type Address = USAddress | IndianAddress;

const address: Address = {
  street: 'Madanwad',
  zip: 396001,
  pincode: 234324
}

console.log('address', address)


// so we can choose based on how we programmed our app
// for class based component we can use interface
// for functional component we can use type 

// so interface provides extensibility and overloading which essentially kind of same 
// type provides unions and intersection which is not possible in interface
