import { FC, useState } from 'react';

interface PostModalProps {
  onCreate: (title: string, content: string) => void;
}

const PostModal: FC<PostModalProps> = ({ onCreate }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => setOpen(true)}
      >
        New Post
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-xl mb-4">Create Post</h2>
            <input
              className="border w-full mb-2 p-2"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <textarea
              className="border w-full mb-4 p-2"
              placeholder="Content"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => {
                  onCreate(title, content);
                  setTitle('');
                  setContent('');
                  setOpen(false);
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostModal;
