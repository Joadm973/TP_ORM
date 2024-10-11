#include <iostream>
#include <vector>
#include <cmath>

class Point {
public:
    double x, y;

    Point(double x, double y) : x(x), y(y) {}
};

class Polygone {
private:
    std::vector<Point> points;

public:
    void addPoint(double x, double y) {
        Point point(x, y);
        points.push_back(point);
    }

    void dump() const {
        for (size_t i = 0; i < points.size(); ++i) {
            std::cout << "Point " << i + 1 << ": (" << points[i].x << ", " << points[i].y << ")\n";
        }
    }

    void perimeter() const {
        if (points.size() < 3) {
            std::cout << "Le polygone doit avoir au moins 3 points pour calculer le perimetre.\n";
            return;
        }

        double totalPerimeter = 0;
        for (size_t i = 0; i < points.size(); ++i) {
            const Point& currentPoint = points[i];
            const Point& nextPoint = points[(i + 1) % points.size()];

            double distance = std::sqrt(std::pow(nextPoint.x - currentPoint.x, 2) + std::pow(nextPoint.y - currentPoint.y, 2));
            totalPerimeter += distance;
        }

        std::cout << "Perimetre du polygone : " << totalPerimeter << std::endl;
    }
};

int main() {
    Polygone poly;
    poly.addPoint(3, 6);
    poly.addPoint(9, 8);
    poly.addPoint(12, 6);
    poly.addPoint(5, 1);
    poly.addPoint(5, 1);
    poly.dump();
    poly.perimeter();
    return 0;
}
