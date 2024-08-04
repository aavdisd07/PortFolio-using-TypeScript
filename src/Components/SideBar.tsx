import { useDisclosure } from "@mantine/hooks";
import {
  Drawer,
  Button,
  DrawerContent,
  DrawerRoot,
  Burger,
} from "@mantine/core";
import { IconHexagonLetterC, IconX } from "@tabler/icons-react";
import { navLinks } from "./Header";

const SideBar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root
        className="md:hidden !-z-10 "
        size="50vw"
        position="right"
        opened={opened}
        onClose={toggle}
      >
        <Drawer.Overlay
          className="!-z-0"
          style={{ backgroundOpacity: 0.5, blur: 4 }}
        />  
        <Drawer.Content className="!-z-0  h-50" bg="#0A192F">
          <Drawer.Body className="mt-20 flex flex-col gap-6 " bg="#0A192F">
            {navLinks(true)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger
        className="md:!hidden !z-10 "
        size={30}
        color="#DAFA66"
        opened={opened}
        onClick={toggle}
      />
    </>
  );
};
export default SideBar;
