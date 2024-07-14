import { Terminal } from './terminal.interfaces';
export interface Location {
  dormitory: string;
  module: string;
  description: string;
  terminal?: Terminal | null;
}
