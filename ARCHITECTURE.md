# Architecture

Principles

1.

Components should have one responsibility.

2.

Data lives in lib/data.

3.

Configuration lives in lib/config.

4.

Types live in lib/types.

5.

Never duplicate content.

6.

Favor composition over repetition.

Folder Structure

app/

components/
ui/
layout/
home/
services/

lib/
config/
constants/
data/
types/
utils/

public/

Component Rules

Every component should:

• Accept typed props

• Be reusable

• Be presentation only

• Avoid business logic

Data Rules

Never hardcode:

Navigation

Services

Features

Footer Links

Contact Information

Everything should come from data files.
