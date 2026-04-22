import withWindowWrapper from "@components/window/windowWrapper";
import { useAppStore } from "@store";

function ContactsInner() {
  return <div>This is contacts</div>;
}

const ContactsWrapped = withWindowWrapper(ContactsInner);

export default function Contacts() {
  const { isOpened } = useAppStore((state) =>
    state.getWindowByName("contacts"),
  );
  return (
    <>
      {isOpened && (
        <div className="hidden lg:absolute inset-0 lg:flex justify-center items-center">
          <ContactsWrapped
            windowId="contacts"
            title="Contacts"
            Icon={() => <>Icon</>}
          />
        </div>
      )}
    </>
  );
}
