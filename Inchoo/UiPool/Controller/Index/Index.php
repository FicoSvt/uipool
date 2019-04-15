<?php
namespace Inchoo\UiPool\Controller\Index;
use Magento\Catalog\Helper\Image;
use Magento\Store\Model\StoreManager;

class Index extends \Magento\Framework\App\Action\Action
{
    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        \Magento\Catalog\Helper\Category $category,
        \Magento\Catalog\Model\CategoryRepository $categoryRepository
    ) {
        $this->category = $category;
        $this->categoryRepository = $categoryRepository;
        parent::__construct($context);
    }

    public function execute()
    {
        $array = [];
        $categories = $this->category->getStoreCategories();
        foreach($categories as $category) {
            $array[] = $category->getName();
        }
        echo json_encode($array);
        return;
    }
}