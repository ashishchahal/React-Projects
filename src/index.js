import React from 'react';
import ReactDOM from 'react-dom';

//import DidMount from './LifecycleMethods/ComponentDidMount';
//import WillReceiveProps from './LifecycleMethods/Updating-lifecycle/ComponentWillReceiveProps';
//import ShouldComponentUpdate from './LifecycleMethods/Updating-lifecycle/shouldComponentUpdate'
import ComponentWillUpdate from './LifecycleMethods/Updating-lifecycle/componentWillUpdate'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>

                  <ComponentWillUpdate text= "Hello World!!" />
                </div>, document.getElementById('root'))

                setTimeout(() =>{
                  ReactDOM.render(<ComponentWillUpdate />,
                                    document.getElementById('root'));
                }, 3500)

registerServiceWorker();
