import React from 'react';
import ReactDOM from 'react-dom';

import DidMount from './LifecycleMethods/ComponentDidMount';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>

                  <DidMount />
                </div>, document.getElementById('root'))


registerServiceWorker();
