import React from 'react';
import ReactDOM from 'react-dom';

import WillMount from './LifecycleMethods/ComponentWillMount';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>

                  <WillMount />
                </div>, document.getElementById('root'))

setTimeout(() =>{
                  ReactDOM.render(<WillMount />,
                                  document.getElementById('root'))
                }, 2000)
registerServiceWorker();
