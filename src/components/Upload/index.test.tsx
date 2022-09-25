import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Upload from './index';

test('render default state', () => {
  const onChange = jest.fn();
  render(<Upload data={[]} onChange={onChange} />);
  const element = screen.getByText(/Click or drop your dog image here/i);
  expect(element).toBeInTheDocument();
});

// test('render image state', async () => {
//   const onChange = jest.fn();
//   const file = new File(["(⌐□_□)"], "dog.png", { type: "image/png" });
//   render(<Upload data={[]} onChange={onChange} />);
//   const uploader = screen.getByTestId("upload-image");

//   userEvent.click(uploader);
//   // simulate ulpoad event and wait until finish
//   await waitFor(() =>
//     fireEvent.change(uploader, {
//       target: { files: [file] },
//     })
//   );
//   // get the same uploader from the dom
//   const image = document.getElementById("dog-image-0");
//   // check if the file is there
//   expect(image.files[0].name).toBe("dog.png");
//   expect(image.files.length).toBe(1);
// });
