import { fireEvent, render, screen } from '@testing-library/react';
import App from './app';
import FileExplorer, { FileTree } from './file-explorer';
import { fileStrData } from '../utils/constants';
import { Eye, FilePlus, FolderPlus, Trash2 } from 'lucide-react';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getAllByText } = render(<App />);
    expect(
      getAllByText(new RegExp('File Explorer', 'gi')).length > 0
    ).toBeTruthy();
  });

  it('should have a project name as the heading', () => {
    render(<FileExplorer />);
    const element = screen.getByRole('heading', { name: 'My Project' });
    expect(element).toBeTruthy();
  });
});

describe('FileExplorer', () => {
  const mockDelete = vi.fn();
  const mockAddFolder = vi.fn();
  const mockAddFile = vi.fn();

  beforeEach(() => {
    render(
      <FileTree
        fileStructure={fileStrData}
        folderOpen={{ 1: true, 4: true }}
        onChange={vi.fn()}
        fileValue=""
        handleFolder={vi.fn()}
        handleFile={vi.fn()}
        handleDelete={mockDelete}
        handleAddFile={vi.fn()}
        handleAddFolder={vi.fn()}
      />
    );
  });
  it('should render li items', () => {
    const items = screen.getAllByRole('listitem');
    const length = items.length;
    expect(length).toBeGreaterThan(1);
  });
  it('should have file add button', () => {
    render(<FilePlus />);
  });
  it('should have folder add button', () => {
    render(<FolderPlus />);
  });
  it('should have delete folder button', () => {
    render(<Trash2 />);
  });
  it('should have view folder button', () => {
    render(<Eye />);
  });
  it('should delete an item on add delete button click', () => {
    const deleteButton = screen.getAllByLabelText('delete');
    fireEvent.click(deleteButton[3]);
    expect(mockDelete).toHaveBeenCalled();
  });
  it('should add an item on add file button click', () => {
    const addFileButton = screen.getByRole('add file');
    fireEvent.click(addFileButton);
    expect(mockAddFile).toHaveBeenCalled();
  });
  it('should add an item on add folder button click', () => {
    const addFolderButton = screen.getByRole('add folder');
    fireEvent.click(addFolderButton);
    expect(mockAddFolder).toHaveBeenCalled();
  });
});
