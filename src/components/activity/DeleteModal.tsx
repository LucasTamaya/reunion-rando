import { Button } from "../common/Button";

interface Props {
  handleCancel: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: () => any;
  isLoading: boolean;
}

export const DeleteModal: React.FC<Props> = ({
  handleCancel,
  handleDelete,
  isLoading,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/50">
      <div className="bg-white p-8 rounded">
        <h2 className="text-main-grey text-xl sm:text-2xl text-center font-semibold mb-8">
          Êtes-vous sûr de vouloir supprimer cette activité ?
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-3 sm:gap-y-0 gap-x-5">
          <Button
            text="Annuler"
            variant="secondary"
            handleClick={() => handleCancel(false)}
          />
          <Button
            text="Supprimer"
            variant="primary"
            isLoading={isLoading}
            handleClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

// The handleCancel prop is a React.Dispatch<React.SetStateAction<boolean>> type, but it's called without providing a value to set the state to. This will cause a runtime error. To fix this, the handleCancel function should be called with a value, for example:
// Copy code
// <Button
//   text="Annuler"
//   color="grey"
//   handleClick={() => handleCancel(false)}
// />
// The handleDelete prop is defined as a function that returns any, but it's not clear what this function does or what type of value it should return. It would be better to provide a more specific return type for this function, for example:
// Copy code
// interface Props {
//   handleCancel: React.Dispatch<React.SetStateAction<boolean>>;
//   handleDelete: () => Promise<void>;
//   isLoading: boolean;
// }

// The <Button> components are using the color prop to specify the button color, but it would be better to use the variant prop for this. The variant prop is a standard way of specifying the appearance of a button in React, and it allows the button to be styled according to the theme. For example:
