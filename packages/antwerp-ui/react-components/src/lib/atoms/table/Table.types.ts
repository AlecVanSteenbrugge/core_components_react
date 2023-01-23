// import { ButtonProps } from '../button';

import { ChangeEvent, MouseEvent, ReactNode } from 'react';
import { ButtonProps } from '../button';

export interface TableProps {
  actions?: {
    label?: string;
    buttons: (Omit<ButtonProps, 'size'> & {
      label: string;
      onActionClick?: (event: MouseEvent<HTMLButtonElement>, rowId: string) => void;
    })[];
  };
  columns: TableColumnSchema[];
  fixedColumnLeft?: boolean;
  fixedColumnRight?: boolean;
  id?: string;
  onSelect?: (event: ChangeEvent<HTMLInputElement>, id?: string) => void;
  onSelectAll?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSortClick?: (event: MouseEvent<HTMLButtonElement>, columnValue: string) => void;
  open?: boolean;
  qa?: string;
  responsive?: boolean;
  rows: TableRowSchema[];
  selectable?: boolean;
  selected?: string[];
  small?: boolean;
  sort?: string;
  sortDirection?: 'ascending' | 'descending';
  striped?: boolean;
}

export interface TableRowSchema {
  id: string;
  [key: string]: ReactNode;
}

export interface TableColumnSchema {
  label?: string;
  value: string;
  alignRight?: boolean;
  sortable?: boolean;
  dataType?: 'primary' | 'secondary';
}

export type TableHeaderProps = Pick<
  TableProps,
  | 'actions'
  | 'columns'
  | 'onSelectAll'
  | 'onSortClick'
  | 'selectable'
  | 'rows'
  | 'selected'
  | 'small'
  | 'sort'
  | 'sortDirection'
> & { tableId?: string };

export type TableBodyProps = Pick<
  TableProps,
  'actions' | 'columns' | 'onSelect' | 'selectable' | 'selected' | 'rows' | 'small'
> & {
  tableId?: string;
};
