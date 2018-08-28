import os
from string import Template


def process_messages():
    with open('templates/msgs.txt', 'r') as f:
        msgs = f.read().splitlines()
    basenames = [name.rsplit('/', 1)[1] for name in msgs]
    with open('templates/msg-template.md', 'r') as f:
        msg_template = f.read()
    for name in basenames:
        s = Template(msg_template)
        filename = "reference/ros-messages/msg/{}.md".format(
            name.replace('_', '-')
        )
        with open(filename, 'w') as f:
            f.write(s.safe_substitute(message=name))


def process_service_messages():
    with open('templates/srvs.txt', 'r') as f:
        srvs = f.read().splitlines()
    basenames = [name.rsplit('/', 1)[1] for name in srvs]
    with open('templates/srv-template.md', 'r') as f:
        srv_template = f.read()
    for name in basenames:
        s = Template(srv_template)
        filename = "reference/ros-messages/srv/{}.md".format(
            name.replace('_', '-')
        )
        with open(filename, 'w') as f:
            f.write(s.safe_substitute(message=name))


def process_nodes():
    basenames = []
    with open('templates/nodes.txt', 'r') as f:
        nodes = f.read().splitlines()
    for node in nodes:
        name = node.rsplit('/', 1)[1] if '/' in node else node
        basenames.append(name)

    with open('templates/launch-template.md', 'r') as f:
        launch_template = f.read()
    with open('templates/node-template.md', 'r') as f:
        node_template = f.read()

    for name in basenames:
        s = Template(launch_template)
        filename = "reference/ros-launch-files/{}.md".format(
            name.replace('_', '-')
        )
        with open(filename, 'w') as f:
            f.write(s.safe_substitute(node=name))

        t = Template(node_template)
        filename = "reference/ros-nodes/{}.md".format(
            name.replace('_', '-')
        )
        with open(filename, 'w') as f:
            f.write(t.safe_substitute(node=name))


def process_packages():
    with open('templates/packages.txt', 'r') as f:
        packages = f.read().splitlines()
    with open('templates/package-template.md', 'r') as f:
        package_template = f.read()
    for name in packages:
        s = Template(package_template)
        filename = "reference/ros-packages/{}.md".format(
            name.replace('_', '-')
        )
        with open(filename, 'w') as f:
            f.write(s.safe_substitute(package=name))


def process_services():
    with open('templates/services.txt', 'r') as f:
        services = f.read().splitlines()
    with open('templates/service-template.md', 'r') as f:
        service_template = f.read()
    for name in services:
        s = Template(service_template)
        service_name = name.rsplit('/', 1)[1] if '/' in name else name
        filename = "reference/ros-services/{}.md".format(
            name.replace("/", "", 1).replace("/", "-").replace("_", "-")
        )
        with open(filename, 'w') as f:
            f.write(s.safe_substitute(service=name, service_name=service_name))


def process_topics():
    with open('templates/topics.txt', 'r') as f:
        topics = f.read().splitlines()
    with open('templates/topic-template.md', 'r') as f:
        topic_template = f.read()
    for name in topics:
        s = Template(topic_template)
        topic_name = name.rsplit('/', 1)[1] if '/' in name else name
        filename = "reference/ros-topics/{}.md".format(
            name.replace("/", "", 1).replace("/", "-").replace("_", "-")
        )
        with open(filename, 'w') as f:
            f.write(s.safe_substitute(topic=name, topic_name=topic_name))


for path in ["reference", "reference/ros-launch-files",
             "reference/ros-nodes", "reference/ros-services",
             "reference/ros-topics", "reference/ros-messages",
             "reference/ros-messages/msg", "reference/ros-messages/srv",
             "reference/ros-packages"]:
    if not os.path.exists(path):
        os.mkdir(path)

process_packages()
process_nodes()
process_services()
process_topics()
process_messages()
process_service_messages()