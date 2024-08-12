import React from "react";
import {
  Badge,
  Indicator,
  Image,
  Modal,
  Group,
  Text,
  Button,
  ScrollArea,
} from "@mantine/core";
const FullProject = (props: any) => {
  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      size="70%"
      className="font-mono"
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl  !rounded-tr-3xl   ">
          <Modal.Title
            data-autofocus
            className="!text-3xl  flex gap-4  items-center text-white !font-bold"
          >
            {props.title}{" "}
            {props.live == true && (
              <Badge
                size="lg"
                variant="outline"
                className="flex items-center gap-1"
                color="pink"
                rightSection={
                  <Indicator
                    color="pink"
                    position="middle-end"
                    size={10}
                    processing
                  ></Indicator>
                }
              >
                Live{" "}
              </Badge>
            )}
          </Modal.Title>
          <Modal.CloseButton
            size="md"
            iconSize="30px"
            className="!bg-bgColor !text-red-500"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor !pt-2 !border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl  !rounded-br-3xl ">
          <Image
            className="!rounded-xl  !shadow-[0_0_1px_0_#64FADA]"
            src={props.image}
            alt={props.image}
          />
          <Group mt="md" mb="md">
            {props.technologies.map((tech: string, index: number) => (
              <Badge key={index} variant="light" size="xl" color="#64FADA">
                {tech}
              </Badge>
            ))}
          </Group>
          <Text className="!text-justify" size="lg" c="dimmed">
            {props.desc}
          </Text>
          <Group mt="md" justify="space-between">
            <a href={props.github} target="_blank" className=" !w-[48%]">
              <Button
                variant="outline"
                size="lg"
                color="primaryColor"
                className="!bg-primaryColor !text-bgColor"
                fullWidth
                mt="md"
                radius="md"
              >
                view Code
              </Button>
            </a>
            <a className=" !w-[48%]" target="_blank" href={props.link}>
              <Button
                variant="outline"
                size="lg"
                color="#64FADA"
                fullWidth
                mt="md"
                radius="md"
              >
                view Live
              </Button>
            </a>
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default FullProject;
