import { MouseEvent, ReactNode } from 'react';
import { ButtonProps } from '../button';

export interface TableProps {
  actions?: {
    label?: string;
    buttons: (ButtonProps & {
      onActionClick?: (event: MouseEvent<HTMLButtonElement>, rowId: string) => void;
    })[];
  };
  columns: TableColumnSchema[];
  fixedColumnLeft?: boolean;
  fixedColumnRight?: boolean;
  id?: string;
  onSelect?: (id?: string) => void;
  onSelectAll?: () => void;
  onSortClick?: (columnValue: string) => void;
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
  checkboxLabel?: string;
  [key: string]: ReactNode;
}

export interface TableColumnSchema {
  label?: string;
  value: string;
  transformFunction?: (value: ReactNode) => ReactNode;
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
