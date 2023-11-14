import { Card, CardHeader, CardBody, CardFooter, Image, Divider, Link } from "@nextui-org/react";
type CardProps = {
    id: number,
    title: string;
    description: string;
    image: string;
    url: string;
}

export default function CustomCard(props: CardProps) {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={props.image}
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">{props.title}</p>
                    {/* <p className="text-small text-default-500">nextui.org</p> */}
                </div>
            </CardHeader>
            <Divider />
            <CardBody className="max-h-[140px] overflow-ellipsis">
                <p>{props.description}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    href={`/models/${props.id}`}
                >
                    Ver más.
                </Link>
            </CardFooter>
        </Card>
    )

}