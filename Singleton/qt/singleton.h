#ifndef SINGLETON_H
#define SINGLETON_H
#include <QString>

class Singleton
{
public:
    static Singleton* getInstance(); // Remember static puts the method on the CLASS itself.
    void setName(QString name);
    QString getName();
private:
    Singleton(); // Make the constructor private to STOP initialization outside the class
    static Singleton* instance; // Keep the instance of the class within itself.
    QString name;
};

#endif // SINGLETON_H
