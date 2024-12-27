# JSON CSV Files Utility

This npm package provides utility functions to work with JSON and CSV files.

## Installation

To install the package, run:

```bash
npm install json-csv-files-utility
```

## Usage
Import the functions from the package and use them in your project.

### appendToArrayJsonFile
Appends new data to an array in a JSON file.

__Parameters__:
- `filePath` (string): The path to the JSON file.
- `newData` (any): The new data to append to the array.

__Example__
```js
import { appendToArrayJsonFile } from 'json-csv-files-utility';

const filePath = './data.json';
const newData = { id: 2, name: 'Jane Doe' };

appendToArrayJsonFile(filePath, newData)
  .then(() => {
    console.log('Data appended successfully');
  })
  .catch((error) => {
    console.error('Error appending data:', error);
  });
```


### sleep
Pauses execution for a specified number of milliseconds.

__Parameters__:
- `ms` (number): The number of milliseconds to pause.

__Example__
```js
import { sleep } from 'json-csv-files-utility';

async function example() {
  console.log('Waiting...');
  await sleep(2000);
  console.log('Done waiting');
}

example();
```

## License
This project is licensed under the MIT License. 
