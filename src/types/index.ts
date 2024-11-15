export interface TaskProps {
  id: string;
  title: string;
  description: string;
  status: number;
}

export interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  status: number;
  removeTask: (taskId: string) => void;
  editTask: (
    id: string,
    title: string,
    description: string,
    status: number
  ) => void;
}

export interface TaskCreateModalProps {
  isVisible: boolean;
  onClose: () => void;
  onAdd: (title: string, description: string) => void;
}

export interface TaskDeleteModalProps {
  isVisible: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export interface TaskEditModalProps {
  isVisible: boolean;
  onClose: () => void;
  onEdit: (title: string, description: string, status: number) => void;
  initialTitle: string;
  initialDescription: string;
  initialStatus: number;
}

// RPG Menu Types

export interface RPGScreenProps {
  isVisible: boolean;
  onClose: () => void;
  onAdd: (title: string, description: string) => void;
}

export interface MenuItemProps {
  label: string;
  action: () => void;
  text: string;
}

export interface LocationProps {
  name: string;
  menu: MenuItemProps[];
}

export interface DynamicMenuProps {
  onMenuChange?: (menu: MenuItemProps[], title: string) => void;
  onLocationChange?: (location: string) => void;
  onTextChange?: (text: string) => void;
}

export type MenuSetter = (menu: MenuItemProps[], title: string) => void;

// RPG Player Types

export interface RPGInventoryProps {
  label: string;
  stats: {
    hp?: number;
    mp?: number;
    atk?: number;
    def?: number;
    int?: number;
    spd?: number;
  }
}

export interface RPGPlayerProps {
  name: string;
  experience: number;
  level: number;
  currentStats: {
    hp: number;
    mp: number;
    atk: number;
    def: number;
    int: number;
    spd: number;
  }
  inventory: RPGInventoryProps[];
}