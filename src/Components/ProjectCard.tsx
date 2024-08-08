import {
  Card,
  Image,
  Group,
  Text,
  Badge,
  Button,
  Indicator,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProject from "./FullProject"


const ProjectCard = (props:any) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
    <Card  onClick={open}
      className="!bg-bgColor mb-5 hover:!scale-[1.03] cursor-pointer  transition-transform duration-300 ease-in-out !border-primaryColor hover:!shadow-[0_0_10px_1px_#64FADA] border-2"
      w="360px"
      shadow="lg"
      padding="sm"
      radius="lg"
      withBorder
    >
      <Card.Section className="p-3">
        <Image
          className="rounded-xl !shadow-[0_0_1px_0_#64FADA]"
          src={props.image}
          // height={160}
          alt={props.image}
        />
      </Card.Section>

      <Group mb="xs" justify="space-between" mt="md">
        <Text className="gap-3 text-2xl flex items-center !font-bold !text-white">
          {props.title}
          {props.live == true && (
            <Badge
              variant="outline"
              color="pink"
              rightSection={
                <Indicator
                  color="pink"
                  position="middle-end"
                  size={7}
                  processing
                ></Indicator>
              }
            >
              Live{" "}
            </Badge>
          )}
        </Text>
      </Group>

      <Group  mb="xs">
        {props.technologies.map((tech: string, index: number) => index<3 &&(
          <Badge key={index} variant="light"  size="lg" color="#64FADA">
            {tech}
          </Badge>
        ))}
      </Group>
      <Text className="!text-justify" size="sm" c="dimmed" lineClamp={5}>
        {props.desc}
      </Text>

      <Button 
        className="!bg-primaryColor !text-bgColor"
        fullWidth
        mt="md"
        radius="md"
       onClick={open}
      >
        show more
      </Button>
    </Card>
    <FullProject opened={opened} close={close} title={props.title}  
       desc={props.desc} image={props.image} live={props.live}
       link={props.link} github={props.github} technologies={props.technologies} />
   </>
  )
};

export default ProjectCard;
