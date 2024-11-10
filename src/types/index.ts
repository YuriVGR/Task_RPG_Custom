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