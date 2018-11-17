#include <QCoreApplication>
#include <singleton.h>
#include <QDebug>

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    Singleton *single1 = Singleton::getInstance();
    Singleton *single2 = Singleton::getInstance();
    // Set the name from single1
    single1->setName("John");
    qDebug() << single1->getName() <<endl; // John
    qDebug() << single2->getName() <<endl; // John
    // Set the name from single2
    single1->setName("Doe");
    qDebug() << single1->getName() <<endl; // Doe
    qDebug() << single2->getName() <<endl; // Doe
    // Check if the single1 instance is the same instance
    // as single2
    qDebug() << (single1 == single2) <<endl; // true
    return a.exec();
}
