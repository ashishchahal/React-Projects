import React from 'react';
import ReactDOM from 'react-dom';

//import DidMount from './LifecycleMethods/ComponentDidMount';
import WillReceiveProps from './LifecycleMethods/Updating-lifecycle/ComponentWillReceiveProps';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>

                  <WillReceiveProps text="Hello World"/>
                </div>, document.getElementById('root'))


registerServiceWorker();
