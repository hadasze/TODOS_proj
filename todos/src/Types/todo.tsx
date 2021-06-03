import React from 'react';

// export type todo = {
//     id: string;
//     label: string;
//     active: boolean;
// }

export class todo {
    id: string;
    label: string;
    active: boolean;
  
    constructor(id: string, label: string, active: boolean) {
      this.id = id;
      this.label = label;
      this.active = active;
    }
  
  }