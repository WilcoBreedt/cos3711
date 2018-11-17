#include "singleton.h"

// Set the instance to NULL
Singleton* Singleton::instance = NULL;

Singleton::Singleton()
{
}

void Singleton::setName(QString name)
{
    // Always work with the instance on the singleton
    instance->name = name;
}

QString Singleton::getName()
{
    // Work with the instance on the singleton
    return instance->name;
}

Singleton* Singleton::getInstance()
{
    // Create the instance the first time if it is NULL
    if (instance == NULL)
    {
        instance = new Singleton();
    }
    // Return the instance on singleton
    return instance;
}
